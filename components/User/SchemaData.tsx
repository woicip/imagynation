import CurlyBraces from "../API/CurlyBraces"

export default function SchemaData(props: any){
    return (
        <div>
            <CurlyBraces>&#123;</CurlyBraces>
            <br/>
                <span className="pl-[40px]"><span className="text-green-500">date</span>: string,</span> <br/>
                <span className="pl-[40px]"><span className="text-green-500">user</span>: <CurlyBraces>&#123;</CurlyBraces></span>
                <br/>
                    <span className="pl-[80px]"><span className="text-green-500">id</span>: number,</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">name</span>: string,</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">email</span>: string,</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">phone</span>: string,</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">avatar</span>: string</span>
                <br/>
                <span className="pl-[40px]"><CurlyBraces>&#125;</CurlyBraces></span>
                
            <br/>
            <CurlyBraces>&#125;</CurlyBraces>
        </div>
    )
}