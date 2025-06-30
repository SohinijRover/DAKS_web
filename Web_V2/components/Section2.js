const Section2 = ({ img, name }) => {
    return (
      <div 
        className="bg-cover bg-center h-70 w-75 rounded-3xl p-4 flex flex-col text-2xl/5 justify-center gap-6 hover:scale-105 duration-200 cursor-pointer shadow-[-18px_27px_37px_15px_rgba(0,_0,_0,_0.35)]"
        style={{ backgroundImage: `url(/${img}.jpeg)` }}
      >
        <p className="text-white">{name}</p>
        <p className="text-xs text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
      </div> 
    )
  }
  
  export default Section2
  