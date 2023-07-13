import { useContext } from "react"
import { ImagyContext } from "../Context/Context"
import Header from "../API/Header"
import Response from "../API/Response"
import Address from "../API/Address"
import Separation from "../API/Separation"
import AllPostsJSON from "./AllPostsJSON"
import SchemaData from "./SchemaData"
import RandomUserJSON from "./RandomUserJSON"
import SelectedUserJSON from "./SelectedUserJSON"

export default function Posts(props: any){

    const context = useContext(ImagyContext);

    return (
        <section className='py-[80px] px-[20px] mobileL:px-[0px] animate-fadeIn'>
            <div>
                <h1 className='text-4xl font-bold flex items-center'>
                    Post Data 
                </h1>
                <p className='mt-[10px] text-sm text-white/70'>Providing you with User&apos;s data for your UI Prototype/UI Design testing with data schema like below.</p>
            </div>

            <div className="mt-[50px] text-sm">
                <Response title="Post's Data Schema" res={<SchemaData />} />
            </div>

            <Separation />

            <div className='mt-[80px]'>
                <div>
                    <Header number="01" title="Random Single Post" desc="You will get a random post everytime you call this endpoint" />
                    <Address method="GET" address={`${context.api_endpoint}/random-post`} />
                    <section className="my-[50px]">
                        <h4 className="text-lg font-medium">Description</h4>
                        <p className="text-sm text-white/80">This endpoint will give you different post data between ID 1 to ID 10 of a post.</p>
                    </section>
                    <Response title="JSON Response" res={<RandomUserJSON />} />
                </div>

                <Separation />

                <div>
                    <Header number="02" title="Single User" desc="You will get a lot of user data in one single array inside JSON" />
                    <Address method="GET" address={`${context.api_endpoint}/post/5`} />
                    <section className="my-[50px]">
                        <p className="text-sm text-white/80">You can choose the ID for a user from 1 to 10. Each ID will give you different user&apos;s data.</p>
                    </section>
                    <Response title="JSON Response" res={<SelectedUserJSON />} />
                </div>

                <Separation />

                <div>
                    <Header number="03" title="All Users" desc="The endpoint will give you all user" />
                    <Address method="GET" address={`${context.api_endpoint}/posts`} />
                    <section className="my-[50px]">
                        <p className="text-sm text-white/80">This endpoint will give you users from ID 1 to 10 in order.</p>
                    </section>
                    <Response title="JSON Response" res={<AllPostsJSON />} />
                </div>
            </div>
        </section>
    )
}