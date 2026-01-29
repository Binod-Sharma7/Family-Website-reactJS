import Cardselements from "./Cardselements";

export default function Cards(props) {
  // console.log(props);
  console.log(props.color);
  
  return (
    <div className="h-full relative flex flex-shrink-0 items-center justify-center p-0">
      <div className="w-64 h-135 overflow-hidden rounded-2xl relative"> 
        <img
        src={props.img}
          alt={props.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  text-white  p-4">
          <Cardselements nam={props.name} des={props.description} color={props.color} num={props.id}/>
        </div>
      </div>
    </div>
  )
}
