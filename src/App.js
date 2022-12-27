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
                    <div className="image-container"> 
                        <img 
                            src={locationImage} 
                            alt="InfoReq"
                            onClick={() => setPageNum(1)}
                        />
                    </div>
                )}

                { pageNum === 1 && (
                    <div className="image-container"> 
                        <img 
                            src={cameraImage} 
                            alt="InfoReq"
                            onClick={() => setPageNum(2)}
                        />
                    </div>
                )}

                { pageNum === 2 && (
                    <div className="image-container"> 
                        <img 
                            src={chatImage} 
                            alt="InfoReq"
                            onClick={() => setPageNum(0)}
                        />
                    </div>
                )}
			</header>
		</div>
	);
}

export default App;
