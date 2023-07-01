

import "./Display.css";
export default function Dispaly(props) {
  return (
    <div className="main_display">
      <ul>
        {props.update.map((item) => {
          return (
            <li key={item.id}>
              <br/>
              {item.FormInput}
              
            <br/>
            {item.CollageName }
              <br/>
              {item.FormNumber}
              <br/>
            
            </li>
          );
        })}
      </ul>
    </div>
  );
}
