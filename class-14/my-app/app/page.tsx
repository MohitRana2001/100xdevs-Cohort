import Image from "next/image";
import { lusitana } from '@/app/ui/fonts';

export default function Home() {
  return (
    <div>
      <p className={lusitana.className} >hello world</p>
    </div>
  );
}
