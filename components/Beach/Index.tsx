import Header from "../API/Header"
import Address from "../API/Address"
import Response from "../API/Response"
import { useContext } from "react"
import { ImagyContext } from "../Context/Context"
import ContextData from "../../types/ContextData"

function CurlyBraces(props: any){
    return <span className="text-white/50">{props.children}</span>
}

const jsonRes1 = <span>
<CurlyBraces>&#123;</CurlyBraces>
    <br/>
        <span className='ml-[40px] text-green-500'>&quot;requestDate&quot;</span>: &quot;2022-11-13T04:57:29.333Z&quot;,<br/>
        <span className='ml-[40px] text-green-500'>&quot;image&quot;</span>: <CurlyBraces>&#123;</CurlyBraces><br/>
        <span className='ml-[80px]'><span className='text-green-500'>&quot;name&quot;</span>: &quot;Beach 1&quot;, <br/></span>
        <span className='ml-[80px]'><span className='text-green-500'>&quot;url&quot;</span>: &quot;https://cdn.sandals.com/home/beach.jpg&quot;</span>
        <br/>
        <CurlyBraces><span className="ml-[40px]">&#125;</span></CurlyBraces>
    <br/>

<CurlyBraces>&#125;</CurlyBraces> 
</span>

const jsonRes2 = <span>
<CurlyBraces>&#123;</CurlyBraces>
    <br/>
        <span className='ml-[40px] text-green-500'>&quot;requestDate&quot;</span>: &quot;2022-11-13T04:57:29.333Z&quot;,<br/>
        <span className='ml-[40px] text-green-500'>&quot;images&quot;</span>: <CurlyBraces>&#91;</CurlyBraces><br/>
        <span className='ml-[80px]'>
            <CurlyBraces>&#123;</CurlyBraces> 
                <br/>
                    <span className='ml-[120px]'><span className='text-green-500'>&quot;name&quot;</span>: &quot;Beach 1&quot;, <br/></span>
                    <span className='ml-[120px]'><span className='text-green-500'>&quot;url&quot;</span>: &quot;https://cdn.sandals.com/home/beach1.jpg&quot;</span>
                <br/>
            <CurlyBraces><span className='ml-[80px]'>&#125;,</span></CurlyBraces>
        </span>

        <br/>

        <span className='ml-[80px]'>
            <CurlyBraces>&#123;</CurlyBraces> 
                <br/>
                    <span className='ml-[120px]'><span className='text-green-500'>&quot;name&quot;</span>: &quot;Beach 2&quot;, <br/></span>
                    <span className='ml-[120px]'><span className='text-green-500'>&quot;url&quot;</span>: &quot;https://cdn.sandals.com/home/beach2.jpg&quot;</span>
                <br/>
            <CurlyBraces><span className='ml-[80px]'>&#125;,</span></CurlyBraces>
        </span>

        <br/>

        <span className='ml-[80px]'>
            <CurlyBraces>&#123;</CurlyBraces>
                <br/>
                    <span className='ml-[120px]'><span className='text-green-500'>&quot;name&quot;</span>: &quot;Beach 3&quot;, <br/></span>
                    <span className='ml-[120px]'><span className='text-green-500'>&quot;url&quot;</span>: &quot;https://cdn.sandals.com/home/beach3.jpg&quot;</span>
                <br/>
            <CurlyBraces><span className='ml-[80px]'>&#125;</span></CurlyBraces>
        </span>

        <br/>
        <CurlyBraces><span className='ml-[40px]'>&#93;</span></CurlyBraces>

    <br/>
<CurlyBraces>&#125;</CurlyBraces>   
</span>

export default function Index(props: any){

    const context: ContextData = useContext(ImagyContext);

    return (
        <section className='py-[80px] px-[20px] mobileL:px-[0px]'>
            <div>
                <h1 className='text-4xl font-bold'>Beach Images</h1>
                <p className='mt-[10px] text-sm text-white/70'>Want images that looks fresh ? Try these beach images.</p>
            </div>

            <div className='mt-[80px]'>
                <div>
                    <Header number="01" title="Single Image" desc="You will get random image of a beach" />
                    <Address method="GET" address={`${context.api_endpoint}/beach`} />
                    <Response res={jsonRes1} />
                </div>

                <div className='my-[100px] w-full h-[1px] border-b border-white/20 border-dashed'></div>

                <div>
                    <Header number="02" title="Multiple Images" desc="You will get a lot of beach images in one array inside JSON" />
                    <Address method="GET" address={`${context.api_endpoint}/beaches`} />
                    <section className="my-[50px]">
                        <h4 className="text-lg font-medium">Returning:</h4>
                        <p className="text-white/50">6 Images &#x28;Max&#x29;</p>
                    </section>
                    <Response res={jsonRes2} />
                </div>
            </div>
        </section>
    )
}