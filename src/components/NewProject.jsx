import Input from "./Input.jsx";

export default function NewProject(){
    return <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
        <div>
            <Input label="Title"/>
            <Input label="Descrpition" textarea={true} />
            <Input label="Due Date"/>
        </div>
    </div>;
}