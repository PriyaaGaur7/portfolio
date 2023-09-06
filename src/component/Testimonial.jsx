import React from 'react'

const Testimonial = () => {
    return (
        <div id="testimonial">
            <h2>Testimonial</h2>

            <section>
                <TestimonialCard name={"Rohini"} feedback={"You are a good web devloper."} />

                <TestimonialCard name={"Aakash"} feedback={"Wow, what a portfolio, doesn't expected from a beginner."} />

                <TestimonialCard name={"Tim Cook"} feedback={"Great seems like you should the Apple CEO."} />
            </section>
        </div>
    );
};

const TestimonialCard = ({ name, feedback }) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial