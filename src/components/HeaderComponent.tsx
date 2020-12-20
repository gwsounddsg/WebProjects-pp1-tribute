import React, { CSSProperties } from "react";
import "./HeaderComponent.css";

const HeaderComponent = () => {
    const image = `https://upload.wikimedia.org/wikipedia/commons/b/b1/Joss_Whedon_by_Gage_Skidmore_7.jpg`;
    const joss: CSSProperties = {
        textAlign: "center",
        fontSize: "5rem",
        color: "white",
    };

    return (
        <section className='hero is-fullheight has-background-grey-darker'>
            <h1 style={joss}>Joss Whedon</h1>
            <figure className='container py-6'>
                <img
                    className=''
                    width='200'
                    height='200'
                    src={image}
                    alt='jossImage'
                />
            </figure>
            <hr />
            <div className='container'>
                <h2 className='subtitle has-text-white'>Background</h2>
                <p className='has-text-white'>
                    <b>Joseph Hill Whedon</b> (/ˈhwiːdən/; born June 23, 1964)
                    is an American film director, producer, writer, and
                    composer. He is the founder of Mutant Enemy Productions, he
                    co-founded Bellwether Pictures, and is best known as the
                    creator of several television series. These include Buffy
                    the Vampire Slayer (1997–2003), Angel (1999–2004), Firefly
                    (2002), Dollhouse (2009–2010), and Agents of S.H.I.E.L.D.
                    (2013–2020). He also produces, directs, and has written
                    several films. Whedon co-wrote for the Pixar animated film
                    Toy Story (1995) (for which he was nominated for the Academy
                    Award for Best Original Screenplay), wrote and directed the
                    Firefly film continuation Serenity (2005), co-wrote and
                    directed the Internet miniseries Dr. Horrible's Sing-Along
                    Blog (2008), and co-wrote and produced the horror comedy
                    film The Cabin in the Woods (2012). He wrote and directed
                    the Marvel Cinematic Universe superhero films The Avengers
                    (2012) and its sequel Avengers: Age of Ultron (2015), and
                    also co-wrote the script for the DC Extended Universe
                    superhero film Justice League (2017). He also served as
                    director for Justice League on re-shoots replacing Zack
                    Snyder.
                </p>
            </div>
        </section>
    );
};

export default HeaderComponent;
