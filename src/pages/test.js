import Aaron from "@/assets/Aaron_Lin.png"
import styles from "@/styles/Committees.module.css"
import Image from "next/image";
export default function test()
{
    return (
        <div>
            <Image src ={Aaron} className= {styles.image}/>
        </div>



    )
}