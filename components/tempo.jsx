import React, { useState, useEffect } from 'react';

function Tempo() {
  const [timeDifference, setTimeDifference] = useState(null);

  useEffect(() => {
    const startDate = new Date('2023-04-16'); // Data específica

    const calculateTimeDifference = () => {
      const currentDate = new Date();
      const difference = currentDate - startDate;

      const years = difference / (1000 * 60 * 60 * 24 * 365);
      const months = difference / (1000 * 60 * 60 * 24 * 30.436875); // Média de dias em um mês
      const days = difference / (1000 * 60 * 60 * 24);
      const hours = difference / (1000 * 60 * 60);
      const minutes = difference / (1000 * 60);
      const seconds = difference / 1000;

      setTimeDifference({ years, months, days, hours, minutes, seconds });
    };

    // Calcula a diferença inicial
    calculateTimeDifference();

    // Atualiza a diferença a cada segundo
    const timer = setInterval(calculateTimeDifference, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, []);

  if (!timeDifference) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container-tempo">
      <p>Anos: {Math.floor(timeDifference.years)}</p>
      <p>Meses: {Math.floor(timeDifference.months)}</p>
      <p>Dias: {Math.floor(timeDifference.days)}</p>
      <p>Horas: {Math.floor(timeDifference.hours)}</p>
      <p>Minutos: {Math.floor(timeDifference.minutes)}</p>
      <p>Segundos: {Math.floor(timeDifference.seconds)}</p>
    </div>
  );
}

export default Tempo;
