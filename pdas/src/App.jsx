import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

export default function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="Alexa" handle="@alexa999" image={AlexaImage}/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Siri" handle="@siri01" image={SiriImage}/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}