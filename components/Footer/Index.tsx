import Link from "next/link"

export default function Footer(props: any){
    return (
        <footer className='mt-[30px] flex items-start justify-between'>
            <div>
                <h4 className='font-bold text-lg'>🦄 Imagynation.</h4>
                <p className='mt-[5px] text-white/40 text-sm'>
                    This project is Open Source Software<br/> 
                    you can contribute to <Link href="https://github.com/woicip/imagynation-docs" className="underline">Imagynation</Link>
                </p>
            </div>

            <div>
                <p className='text-sm text-white/40'>Developed with ❤ by <Link href="https://cipta.dev" className="underline">cipta.dev</Link></p>
            </div>
        </footer>
    )
}