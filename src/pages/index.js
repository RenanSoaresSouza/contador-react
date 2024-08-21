
import { Inter } from "next/font/google";
import Count from './components/Count';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //Projeto feito com Javascript/React e TailwindCSS
  return (
   <main className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col items-center p-8 h-64 justify-center rounded-lg">
          <Count />
      </div>
   </main>
  );
}
