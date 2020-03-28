import React from "react"
import "./journey.css"

const Journey = () => (
    <section id="journey">
        <h2>Anfahrt</h2>
        <div className="containerJourney container">
            <article>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.5977041698716!2d16.071763451442095!3d48.56010002951473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d680272dd3191%3A0xfc7da25ecb2704d0!2sJosef+Weislein-Stra%C3%9Fe+5%2C+2020+Gemeinde+Hollabrunn!5e0!3m2!1sde!2sat!4v1550431527713"
                    width="600" height="450" frameborder="0" allowfullscreen
                    title="Google Maps"></iframe>
            </article>
        </div>
    </section>
)

export default Journey