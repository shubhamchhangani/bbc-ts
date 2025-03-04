function Menu(){
    return (
        <>
<div className="flex justify-center items-center invisible lg:visible mt-1">
            <h1 className="font-semibold cursor-pointer">Home</h1>
            <h1 className="ml-3 font-semibold cursor-pointer">News</h1>
            <h1 className="ml-3 font-semibold cursor-pointer">Sport</h1>
            <h1 className="ml-3 font-semibold cursor-pointer">Business</h1>
            <h1 className="ml-3 font-semibold cursor-pointer">Innovation</h1>
            <h1 className="ml-3 font-semibold cursor-pointer">Culture</h1>
            <h1 className="ml-3 font-semibold cursor-pointer">Travel</h1>
            <h1 className="ml-3 font-semibold cursor-pointer">Earth</h1>
        </div>
        <h1 className="text-5xl font-semibold text-red-800 ml-3">NEWS</h1>
        <hr className="h-px bg-black border-0 mx-3"/>
        </>

        
    )
}

export default Menu;