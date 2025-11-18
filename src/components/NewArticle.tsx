import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewArticle() {

    const navigate = useNavigate();
    const [newArticle, setNewArticle] = useState({
        title: "",
        content: "",
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    function handleSubmit(event: any) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        fetch("http://localhost:3001/articles", {
            method: "POST",
            body: JSON.stringify(newArticle),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Erreur serveur");
                return res.json();
            })
            .then((data) => {
                console.log("Article créé :", data);
                // reset ou redirection
                navigate("/");
            })
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Titre"
                value={newArticle.title}
                onChange={(e) =>
                    setNewArticle({ ...newArticle, title: e.target.value })
                }
            />
            <textarea
                placeholder="Contenu"
                value={newArticle.content}
                onChange={(e) =>
                    setNewArticle({ ...newArticle, content: e.target.value })
                }
            />
            <button type="submit">Créer l’article</button>
        </form>
    );
}

export default NewArticle;