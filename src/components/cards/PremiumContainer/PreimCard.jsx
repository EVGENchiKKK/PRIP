export const PreimCard = () => {
    const [ganrePods, setGanrePods] = useState([]);
    const [loading, setLoading] = useState(true);

    const GanreCard = ({ ganrePod }) => {
        const ganreCardStyle = {
            backgroundImage: `url(${ganrePod.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };

        return (
            <section className='ganreCard' style={ganreCardStyle}>
                <img src={Logo} alt="" />
                <span>{ganrePod.title}</span>
            </section> 
        )
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('/GanrePod.json');
              const data = await response.json();
              setGanrePods(data[collectionName] || []);
            } catch (error) {
              console.error("Ошибка загрузки:", error);
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();
    }, [collectionName]);

    if (loading) return <div>Загрузка...</div>;
    if (!ganrePods.length) return <div>Подборка не найдена.</div>;
}