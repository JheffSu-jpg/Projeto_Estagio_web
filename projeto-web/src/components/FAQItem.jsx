import { useState } from "react";

function FAQItem({ pergunta, resposata}) {
    const [aberto, setAberto] = useState(false);

    function toggleFAQ() {
        setAberto(!aberto);
    }

    return (
        <div classNAme="faq-item glass">
            <button className="faq-question" onClick={toggleFAQ}>
                <span>{pergunta}</span>
                <strong>{aberto ? "-" : "+"}</strong>
            </button>

            {aberto && (
                <div className="faq-answer">
                    <p>{resposta}</p>
                </div>
            )}
        </div>
    );
}

export default FAQItem;