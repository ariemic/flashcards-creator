import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// should look like this:  https://pdfupload.io/

function App() {
  return(
    <div className="bg-gradient-to-t from-stone-200 w-screen h-screen ">
      <Navbar/>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <SectionTitle title="Create & Translate FlashCards for free" subtitle="Upload CSV files with words to create flascards with translated version and example sentences"/>
        <UploadBox/>
      </div>
    </div>
    
  )
}

export default App

interface UploadBoxProps{
  onFileUpload:(file:File) => void;
}

function UploadBox(){
  return(
    <div className="container w-1/2 min-h-80 outline-dashed flex flex-col items-center rounded-md cursor-pointer bg-clip-content ">
      <CloudUploadIcon sx={{fontSize: 100}} />
      <label htmlFor="file-upload">
        Choose file to upload
      </label>
      <input type="file" id="file-upload" name="file-upload" accept=".csv"/>
    </div>
  )
}


interface TitleProps{
  title: string;
  subtitle? : string;
}

function SectionTitle({title, subtitle}:TitleProps){
  return(
    <div className="container mb-20 mt-10 text-center">
      <p className="text-4xl font-display font-bold tracking-normal leading-relaxed"> {title}</p>
      {subtitle && <p className="text-xl font-display font-light">{subtitle}</p>}
    </div>
  )
}


function Navbar(){
  return(
    <div className="min-h-20 bg-stone-200 flex justify-center items-center w-screen px-4">
      <p className="text-lg">Navbar</p>
    </div>
  )
}



