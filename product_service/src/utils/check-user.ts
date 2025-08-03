const USER_SERVICE_URL = "http://user_service:8000/api/users/me/";
export async function userExists(userId: string): Promise<boolean> {
  const DJANGO_USER_API = "http://user-service:8000/users/";

  try {
    const response = await fetch(`${DJANGO_USER_API}${userId}/`);

    if (response.status === 200) {
      return true; // utilisateur trouvé
    } else if (response.status === 404) {
      return false; // utilisateur non trouvé
    } else {
      console.error(
        `Erreur inattendue lors de la vérif user: ${response.status}`
      );
      return false;
    }
  } catch (error) {
    console.error("Erreur fetch vérification user Django:", error);
    return false;
  }
}

export async function getUserFromToken(token: string) {
  try {
    const response = await fetch(USER_SERVICE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur :", error);
    return null;
  }
}
