import "./App.css";
import { useEffect, useState } from "react";
import { EditText, EditTextarea } from 'react-edit-text';
import locationImage from "./img/location.png"; 
import cameraImage from "./img/camera.png"; 
import chatImage from "./img/chat.png"; 

function App() {

    const [pageNum, setPageNum] = useState(0);

    const [locationPage, setConfirmPage] = useState();
    const [chatPage, setChatPage] = useState();
    const [camPage, setCamPage] = useState();


    useEffect(() => {
        
    }, []);

	return (
		<div className="App">
			<header className="App-header">

                { pageNum === 0 && (
                    <div>
                        <div className="image-container"> <img src={locationImage} alt="InfoReq"/></div>
                        <button className="button-container"
                            onClick={() => setPageNum(1)}>
                            
                        </button>
                    </div>
                    
                )}

                { pageNum === 1 && (
                    <div>
                        <div className="image-container"> <img src={cameraImage} alt="InfoReq"/></div>
                        <div>
                        <button className="button-container"
                            onClick={() => setPageNum(2)}>
                            Confirm sharing your camera
                        </button>

                        </div>
                    </div>
                )}

                { pageNum === 2 && (
                    <div>
                        <div className="image-container"> <img src={chatImage} alt="InfoReq"/></div>

                    </div>
                )}

                
			</header>
		</div>
	);
}

export default App;
