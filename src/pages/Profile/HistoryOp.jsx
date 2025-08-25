import { useEffect, useState } from "react";

export const HistoryOp = ({historyCollection}) => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await fetch('/historyOp.json');
                const data = await response.json();
                setHistory(data[historyCollection] || []);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log("Ошибка загрузки:", error);
            };
        };

        fetchHistory();
    }, [historyCollection]);

    if (loading) return <div className="loadingWindow">Загрузка данных...</div>;
    if (!history.length) return <div className="notFaund">Данные не найдены</div>;

    return (
        <div className="wrapperHistory">
            {history.map(history => (
                <div className="historyCard" key={history.id}>
                    <div className="wrapperContentHistory">
                        <h3 className="elHistory zaghistory">{history.nameOperation}</h3>
                        <p className="elHistory priceHistory">{history.price} руб</p>
                        <span className="elHistory dateHistory">{history.dateOperation}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}