import CurlyBraces from "../API/CurlyBraces"

export default function SchemaData(props: any){
    return (
        <div>
            <CurlyBraces>&#123;</CurlyBraces>
            <br/>
                <span className="pl-[40px]"><span className="text-green-500">date</span>: string,</span> <br/>
                <span className="pl-[40px]"><span className="text-green-500">posts</span>: <CurlyBraces>&#123;</CurlyBraces></span>
                <br/>
                    <span className="pl-[80px]"><span className="text-green-500">id</span>: number</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">fullname</span>: string</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">username</span>: string</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">text</span>: string</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">likes</span>: number</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">comments</span>: number</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">avatar</span>: string</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">image_post</span>: string</span> <br/>
                    <span className="pl-[80px]"><span className="text-green-500">posted_at</span>: string</span>
                <br/>
                <span className="pl-[40px]"><CurlyBraces>&#125;</CurlyBraces></span>
                
            <br/>
            <CurlyBraces>&#125;</CurlyBraces>
        </div>
    )
}