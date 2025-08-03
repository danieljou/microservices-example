
"use client";
import React, { useState, useRef, useEffect } from "react";

const aiResponses: Record<string, string> = {
    produits:
        "🛍️ Nous avons plus de 500 produits premium ! iPhone, MacBook, casques gaming... Que recherchez-vous ?",
    livraison:
        "🚚 Livraison express en 24h partout en France. Gratuite dès 50€ d'achat !",
    prix:
        "💰 Nos prix sont compétitifs avec des promotions régulières. Consultez nos offres actuelles !",
    aide:
        "🆘 Je suis votre assistant personnel ! Je peux vous aider avec vos achats, questions ou recommandations.",
    qualité:
        "⭐ Tous nos produits sont sélectionnés pour leur qualité exceptionnelle et garantis 2 ans.",
    retour:
        "↩️ Retours gratuits sous 30 jours. Satisfaction garantie ou remboursé !",
    default:
        "✨ Merci de votre question ! Notre équipe d'experts est là pour vous aider. Que puis-je faire pour vous ?",
};

function generateAiResponse(message: string) {
    const lowerMessage = message.toLowerCase();
    for (const [key, response] of Object.entries(aiResponses)) {
        if (key !== "default" && lowerMessage.includes(key)) {
            return response;
        }
    }
    return aiResponses.default;
}

type Message = { sender: "user" | "ai"; text: string };

const AIShoppingAssistant: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: "ai",
            text:
                "👋 Bienvenue chez LUXE Store ! Je suis votre assistant personnel. Comment puis-je vous aider aujourd'hui ?",
        },
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAsk = (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim()) return;
        setLoading(true);
        setMessages((prev) => [...prev, { sender: "user", text: question }]);
        setQuestion("");
        setTimeout(() => {
            const response = generateAiResponse(question);
            setMessages((prev) => [...prev, { sender: "ai", text: response }]);
            setLoading(false);
        }, 1200);
    };

    return (
        <div>
            {/* Floating Button */}
            {!open && (
                <button
                    className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full shadow-glow hover:shadow-glow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 animate-bounce-soft relative"
                    onClick={handleOpen}
                    aria-label="Ouvrir l'assistant IA"
                >
                    <span className="absolute inset-0 rounded-full bg-primary-500 pulse-ring" />
                    <i className="fas fa-robot text-2xl z-10" />
                </button>
            )}

            {/* Chat Window */}
            {open && (
                <div className="absolute bottom-20 right-0 w-96 max-w-[90vw] bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-200 dark:border-gray-700 overflow-hidden animate-scale-in">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary-500 to-purple-600 p-6 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <i className="fas fa-robot text-lg" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">LUXE Assistant</h3>
                                    <p className="text-sm opacity-90">Votre guide shopping</p>
                                </div>
                            </div>
                            <button
                                className="text-white/80 hover:text-white transition-colors"
                                onClick={handleClose}
                                aria-label="Fermer"
                            >
                                <i className="fas fa-times text-xl" />
                            </button>
                        </div>
                    </div>
                    {/* Messages */}
                    <div className="h-80 overflow-y-auto p-6 space-y-4" id="aiMessages">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex items-start space-x-3 animate-fade-in ${msg.sender}-message`}
                            >
                                {msg.sender === "user" ? (
                                    <>
                                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-sm">
                                            <i className="fas fa-user" />
                                        </div>
                                        <div className="bg-primary-100 dark:bg-primary-900/30 rounded-2xl p-4 max-w-xs">
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                                            <i className="fas fa-robot" />
                                        </div>
                                        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 max-w-xs">
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    {/* Input */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <form onSubmit={handleAsk} className="flex space-x-3">
                            <input
                                type="text"
                                placeholder="Posez votre question..."
                                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                required
                                disabled={loading}
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-2xl hover:from-primary-600 hover:to-purple-700 transition-all shadow-glow hover:scale-105"
                                disabled={loading}
                            >
                                <i className="fas fa-paper-plane" />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIShoppingAssistant;
