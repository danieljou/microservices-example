"use client"
import React, { useState, useRef, useEffect } from "react";
import "../styles/login-register.css";

const initialLogin = { email: "", password: "", remember: false };
const initialRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

export default function LoginRegisterPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [login, setLogin] = useState(initialLogin);
  const [register, setRegister] = useState(initialRegister);
  const [showReset, setShowReset] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: string } | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<"" | "weak" | "medium" | "strong">("");
  const [passwordStrengthText, setPasswordStrengthText] = useState("Force du mot de passe");
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);

  // Neural network background
  useEffect(() => {
    const canvas = document.getElementById("neuralCanvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrame: number;
    const nodes: any[] = [];
    for (let i = 0; i < 40; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 2 + 1,
      });
    }
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(93, 92, 222, 0.5)";
        ctx.fill();
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(93, 92, 222, ${0.3 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      animationFrame = requestAnimationFrame(animate);
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toast system
  useEffect(() => {
    if (toast) {
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
      toastTimeout.current = setTimeout(() => setToast(null), 4000);
    }
    return () => {
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
    };
  }, [toast]);

  // Password strength checker
  function checkPasswordStrength(password: string) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    if (strength <= 2) {
      setPasswordStrength("weak");
      setPasswordStrengthText("Mot de passe faible");
    } else if (strength <= 4) {
      setPasswordStrength("medium");
      setPasswordStrengthText("Mot de passe moyen");
    } else {
      setPasswordStrength("strong");
      setPasswordStrengthText("Mot de passe fort");
    }
  }

  // Handlers
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setLogin((prev) => ({ ...prev, [id === "rememberMe" ? "remember" : id.replace("login", "").toLowerCase()]: type === "checkbox" ? checked : value }));
  };
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setRegister((prev) => ({ ...prev, [id]: type === "checkbox" ? checked : value }));
    if (id === "registerPassword") checkPasswordStrength(value);
  };
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      setToast({ msg: "Veuillez remplir tous les champs", type: "warning" });
      return;
    }
    setShowSuccess(true);
    setToast({ msg: "Connexion réussie ! 🎉", type: "success" });
    setTimeout(() => {
      setShowSuccess(false);
      // Redirection simulée
      // router.push("/");
    }, 3000);
  };
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!register.firstName || !register.lastName || !register.email || !register.password || !register.confirmPassword) {
      setToast({ msg: "Veuillez remplir tous les champs", type: "warning" });
      return;
    }
    if (register.password !== register.confirmPassword) {
      setToast({ msg: "Les mots de passe ne correspondent pas", type: "error" });
      return;
    }
    if (register.password.length < 8) {
      setToast({ msg: "Le mot de passe doit contenir au moins 8 caractères", type: "warning" });
      return;
    }
    if (!register.acceptTerms) {
      setToast({ msg: "Veuillez accepter les conditions d'utilisation", type: "warning" });
      return;
    }
    setToast({ msg: "Compte créé avec succès ! 🎉", type: "success" });
    setToast({ msg: "Email de confirmation envoyé", type: "info" });
    setRegister(initialRegister);
    setPasswordStrength("");
    setPasswordStrengthText("Force du mot de passe");
    setTab("login");
  };
  // Password visibility toggle
  const [showPassword, setShowPassword] = useState<{ [k: string]: boolean }>({});
  const togglePassword = (id: string) => setShowPassword((prev) => ({ ...prev, [id]: !prev[id] }));

  // Reset modal
  const [resetEmail, setResetEmail] = useState("");
  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) {
      setToast({ msg: "Veuillez entrer votre adresse email", type: "warning" });
      return;
    }
    setToast({ msg: "Email de réinitialisation envoyé ! 📧", type: "success" });
    setShowReset(false);
    setResetEmail("");
  };

  // Social login simulation
  const handleSocialLogin = (platform: string) => {
    setToast({ msg: `Connexion ${platform} simulée 🌐`, type: "info" });
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setToast({ msg: `Connecté via ${platform} ! 🎉`, type: "success" });
    }, 3000);
  };

  // Email validation on blur
  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      setToast({ msg: "Format d'email invalide", type: "warning" });
      e.target.style.borderColor = "#ef4444";
    } else if (email) {
      e.target.style.borderColor = "#10b981";
    }
  };

  // Dark mode detection
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
    const listener = (event: MediaQueryListEvent) => {
      if (event.matches) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    };
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
    return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
  }, []);

  // Render
  return (
    <div className="font-sans antialiased bg-gradient-to-br from-neutral-25 via-white to-primary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 min-h-screen relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="parallax-bg"></div>
      {/* Floating Decoration Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-900 rounded-full opacity-20 blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-300 dark:from-purple-800 dark:to-pink-900 rounded-full opacity-15 blur-2xl"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-300 dark:from-blue-800 dark:to-cyan-900 rounded-full opacity-25 blur-xl"></div>
        <div className="floating-element absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-green-200 to-emerald-300 dark:from-green-800 dark:to-emerald-900 rounded-full opacity-20 blur-lg"></div>
      </div>
      {/* Toast */}
      {toast && (
        <div className={`fixed top-20 right-6 z-[100] min-w-80 toast glass-card rounded-2xl p-4 shadow-float border-2 flex items-center space-x-3 ${toast.type}`}> {/* Add color classes as needed */}
          <span className="font-medium text-neutral-800 dark:text-neutral-200">{toast.msg}</span>
          <button onClick={() => setToast(null)} className="ml-auto text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-12 shadow-float-lg max-w-md w-full mx-4 text-center animate-zoom-in">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center animate-bounce-gentle">
              <i className="fas fa-check text-white text-4xl"></i>
            </div>
            <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Connexion réussie !</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">Bienvenue dans votre espace LUXE Store. Redirection en cours...</p>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full animate-pulse" style={{ width: "100%" }}></div>
            </div>
          </div>
        </div>
      )}
      {/* Password Reset Modal */}
      {showReset && (
        <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-float-lg max-w-md w-full mx-4 animate-zoom-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                <i className="fas fa-key text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Réinitialiser le mot de passe</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Entrez votre email pour recevoir un lien de réinitialisation</p>
            </div>
            <form className="space-y-4" onSubmit={handleResetSubmit}>
              <div>
                <input type="email" value={resetEmail} onChange={e => setResetEmail(e.target.value)} placeholder="Votre adresse email" className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base" required />
              </div>
              <div className="flex space-x-3">
                <button type="button" onClick={() => setShowReset(false)} className="flex-1 px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all">Annuler</button>
                <button type="submit" className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-glow hover:scale-105">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-12 relative z-10">
        <div className="max-w-3xl w-full">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center shadow-glow-lg animate-float">
              <i className="fas fa-lock text-white text-4xl"></i>
            </div>
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-primary-600 to-purple-600 dark:from-white dark:via-primary-400 dark:to-purple-400 mb-4">
              {tab === "login" ? "Connexion" : "Inscription"}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              {tab === "login"
                ? "Accédez à votre espace personnel sécurisé"
                : "Créez votre compte LUXE Store"}
            </p>
          </div>
          {/* Login/Register Form */}
          <div className="form-container glass-card rounded-3xl p-8 shadow-float-lg border-2 border-primary-100 dark:border-primary-900/30 animate-scale-in">
            {/* Toggle Switch */}
            <div className="flex items-center justify-center mb-8 bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-1">
              <button
                className={`flex-1 py-3 px-6 text-sm font-semibold rounded-xl transition-all duration-300 ${tab === "login" ? "bg-white dark:bg-neutral-700 text-primary-600 dark:text-primary-400 shadow-sm" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"}`}
                onClick={() => setTab("login")}
              >
                <i className="fas fa-sign-in-alt mr-2"></i>Connexion
              </button>
              <button
                className={`flex-1 py-3 px-6 text-sm font-semibold rounded-xl transition-all duration-300 ${tab === "register" ? "bg-white dark:bg-neutral-700 text-primary-600 dark:text-primary-400 shadow-sm" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"}`}
                onClick={() => setTab("register")}
              >
                <i className="fas fa-user-plus mr-2"></i>Inscription
              </button>
            </div>
            {/* Login Form */}
            {tab === "login" && (
              <form className="space-y-6" onSubmit={handleLoginSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fas fa-envelope text-neutral-400"></i>
                    </div>
                    <input
                      type="email"
                      id="loginEmail"
                      value={login.email}
                      onChange={handleLoginChange}
                      onBlur={handleEmailBlur}
                      placeholder="votre@email.com"
                      className="form-input block w-full pl-12 pr-4 py-4 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Mot de passe</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fas fa-lock text-neutral-400"></i>
                    </div>
                    <input
                      type={showPassword.loginPassword ? "text" : "password"}
                      id="loginPassword"
                      value={login.password}
                      onChange={handleLoginChange}
                      placeholder="Votre mot de passe"
                      className="form-input block w-full pl-12 pr-12 py-4 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base"
                      required
                    />
                    <button type="button" onClick={() => togglePassword("loginPassword")} className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                      <i className={showPassword.loginPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only" id="rememberMe" checked={login.remember} onChange={handleLoginChange} />
                    <div className="toggle-switch">
                      <div className="toggle-slider"></div>
                    </div>
                    <span className="ml-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">Se souvenir de moi</span>
                  </label>
                  <button type="button" onClick={() => setShowReset(true)} className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors">Mot de passe oublié ?</button>
                </div>
                <button type="submit" className="morph-button ripple w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-glow hover:shadow-glow-lg text-lg">
                  <i className="fas fa-sign-in-alt mr-3"></i>Se connecter
                </button>
              </form>
            )}
            {/* Register Form */}
            {tab === "register" && (
              <form className="space-y-6" onSubmit={handleRegisterSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Prénom</label>
                    <input type="text" id="firstName" value={register.firstName} onChange={handleRegisterChange} placeholder="Prénom" className="form-input block w-full px-4 py-4 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Nom</label>
                    <input type="text" id="lastName" value={register.lastName} onChange={handleRegisterChange} placeholder="Nom" className="form-input block w-full px-4 py-4 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fas fa-envelope text-neutral-400"></i>
                    </div>
                    <input type="email" id="registerEmail" value={register.email} onChange={handleRegisterChange} onBlur={handleEmailBlur} placeholder="votre@email.com" className="form-input block w-full pl-12 pr-4 py-4 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Mot de passe</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fas fa-lock text-neutral-400"></i>
                    </div>
                    <input type={showPassword.registerPassword ? "text" : "password"} id="registerPassword" value={register.password} onChange={handleRegisterChange} placeholder="Créer un mot de passe" className="form-input block w-full pl-12 pr-12 py-4 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base" required />
                    <button type="button" onClick={() => togglePassword("registerPassword")} className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                      <i className={showPassword.registerPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                  </div>
                  {/* Password Strength Indicator */}
                  <div className="mt-2">
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1">
                      <div className={`password-strength h-1 rounded-full ${passwordStrength}`}></div>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{passwordStrengthText}</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Confirmer le mot de passe</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fas fa-lock text-neutral-400"></i>
                    </div>
                    <input type="password" id="confirmPassword" value={register.confirmPassword} onChange={handleRegisterChange} placeholder="Confirmer le mot de passe" className="form-input block w-full pl-12 pr-4 py-4 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base" required />
                  </div>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="acceptTerms" checked={register.acceptTerms} onChange={handleRegisterChange} className="mt-1 mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 dark:border-neutral-600 rounded" required />
                  <label htmlFor="acceptTerms" className="text-sm text-neutral-600 dark:text-neutral-400">
                    J'accepte les
                    <a href="#" className="font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors">conditions d'utilisation</a>
                    et la
                    <a href="#" className="font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors">politique de confidentialité</a>
                  </label>
                </div>
                <button type="submit" className="morph-button ripple w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-glow hover:shadow-glow-lg text-lg">
                  <i className="fas fa-user-plus mr-3"></i>Créer mon compte
                </button>
              </form>
            )}
            {/* Divider */}
            <div className="my-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-neutral-300 dark:border-neutral-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 font-medium">Ou continuer avec</span>
                </div>
              </div>
            </div>
            {/* Social Login */}
            <div className="space-y-3">
              <button type="button" className="social-btn google w-full flex items-center justify-center px-6 py-4 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all" onClick={() => handleSocialLogin("Google")}> <i className="fab fa-google text-red-500 mr-3 text-lg"></i>Continuer avec Google</button>
              <button type="button" className="social-btn facebook w-full flex items-center justify-center px-6 py-4 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all" onClick={() => handleSocialLogin("Facebook")}> <i className="fab fa-facebook-f text-blue-600 mr-3 text-lg"></i>Continuer avec Facebook</button>
              <button type="button" className="social-btn apple w-full flex items-center justify-center px-6 py-4 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all" onClick={() => handleSocialLogin("Apple")}> <i className="fab fa-apple text-neutral-800 dark:text-neutral-200 mr-3 text-lg"></i>Continuer avec Apple</button>
            </div>
            {/* Security Notice */}
            <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-3">
                <div className="security-badge w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-300 text-sm">Connexion sécurisée</h4>
                  <p className="text-xs text-green-600 dark:text-green-400">Vos données sont protégées par un chiffrement SSL 256-bit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Neural Network Canvas */}
      <canvas id="neuralCanvas" className="fixed inset-0 pointer-events-none z-[-1] opacity-30 dark:opacity-20"></canvas>
    </div>
  );
} 