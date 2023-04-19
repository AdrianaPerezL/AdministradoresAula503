import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const Grafica = () => {

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Femenino',
        data: [4,5,1,8],
        borderColor: 'rgb(232, 85, 190)',
        backgroundColor: 'rgb(232, 85, 190)',
      },
      {
        label: 'Masculino',
        data: [3,2,1,1],
        borderColor: 'rgb(87, 42, 176)',
        backgroundColor: 'rgb(87, 42, 176)',
      },
    ],
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return(
    <>
    <Line
      options={options}
      data={data}
    />
    </>
  );
}

export default Grafica