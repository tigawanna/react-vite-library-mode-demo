interface indexProps {
label:string;
}

export function GoodButton({label}:indexProps){
return (
 <button className='btn btn-accent'>
   Good {label}
 </button>
);
}
