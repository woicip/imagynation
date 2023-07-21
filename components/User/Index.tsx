import { useContext } from "react"
import { ImagyContext } from "../Context/Context"
import Header from "../API/Header"
import Response from "../API/Response"
import Address from "../API/Address"
import Separation from "../API/Separation"
import AllUsersJSON from './AllUserJSON';
import RandomUserJSON from "./RandomUserJSON"
import SelectedUserJSON from "./SelectedUserJSON"
import SchemaData from "./SchemaData"

export default function Anime(props: any){

    const context = useContext(ImagyContext);

    return (
        <section className='py-[80px] px-[20px] mobileL:px-[0px] animate-fadeIn'>
            <div>
                <h1 className='text-4xl font-bold flex items-center'>
                    User Data
                </h1>
                <p className='mt-[10px] text-white/70'>Providing you with user dummy with data schema like below.</p>
            </div>

            <div className="mt-[50px] text-sm">
                <Response title="User's Data Schema" res={<SchemaData />} />
            </div>

            <Separation />

            <div className='mt-[80px]'>
                <div>
                    <Header number="01" title="Random Single User" desc="You will get random user everytime you call this endpoint" />
                    <Address method="GET" address={`${context.api_endpoint}/random-user`} />
                    <section className="my-[50px]">
                        <h4 className="text-lg font-medium">Description</h4>
                        <p className="text-white/80">This endpoint will give you random dummy user data between <span className="text-yellow-500 font-mono">"1"</span> to <span className="text-yellow-500 font-mono">"10"</span> of a post.</p>
                    </section>
                    <Response title="JSON Response" res={<RandomUserJSON />} />
                </div>

                <Separation />

                <div>
                    <Header number="02" title="Single User" desc="You will get a single dummy user data" />
                    <Address method="GET" address={<>{context.api_endpoint}/user/<span className="text-yellow-500 font-mono">:id</span></>} />
                    <section className="my-[50px]">
                        <h4 className="text-lg font-medium">Description</h4>
                        <p className="text-white/80">You can query the <span className="text-yellow-500 font-mono">":id"</span> to get a dummy user data, query between id <span className="text-yellow-500 font-mono">"1"</span> to <span className="text-yellow-500 font-mono">"10"</span>. Each <span className="text-yellow-500 font-mono">"id"</span> will give you different result of user data.</p>
                    </section>
                    <div className="mb-[50px]">
                        <h4 className="font-medium mb-[10px]">Example</h4>
                        <Address method="GET" address={<>{context.api_endpoint}/post/<span className="text-yellow-500 font-mono">5</span></>} />
                    </div>
                    <Response title="JSON Response" res={<SelectedUserJSON />} />
                </div>

                <Separation />

                <div>
                    <Header number="03" title="All Users" desc="The endpoint will give you all user" />
                    <Address method="GET" address={`${context.api_endpoint}/users`} />
                    <section className="my-[50px]">
                        <h4 className="text-lg font-medium">Description</h4>
                        <p className="text-white/80">This endpoint will give you all of users data from id <span className="text-yellow-500 font-mono">"1"</span> to <span className="text-yellow-500 font-mono">"10"</span> in order.</p>
                    </section>
                    <Response title="JSON Response" res={<AllUsersJSON />} />
                </div>
            </div>
        </section>
    )
}