
// should look like this:  https://pdfupload.io/

function App() {
  return(
    <div className="bg-stone-100 w-screen h-screen ">
      <Navbar/>
      <p className="text-4xl font-display font-bold tracking-normal mx-auto my-10"> Create & Translate  FlashCards for free</p>
    </div>
    
  )
}

export default App



function Navbar(){
  return(
    <div className="min-h-20 bg-stone-200 flex justify-center items-center w-screen px-4">
      <p className="text-lg">Navbar</p>
    </div>
  )
}



