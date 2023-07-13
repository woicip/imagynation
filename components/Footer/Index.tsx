import Link from "next/link"

export default function Footer(props: any){
    return (
        <footer className='mt-[30px] flex items-start justify-between'>
            <div>
                <h4 className='font-bold text-lg'>🧩 Imagynation</h4>
                <p className='mt-[5px] text-white/40 text-sm'>
                    This project is Open Source means<br/> 
                    you can contribute to the project on GitHub.
                </p>
            </div>

            <div>
                <p className='text-sm text-white/40'>2022</p>
            </div>
        </footer>
    )
}