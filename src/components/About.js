import React from "react";

const AboutMe = () => {
  return (
    <section className="about-me-container">
      <h1>About Me</h1>

      <p>
        Welcome to my very own little corner of the web where I can freely share
        my journey without ads or paywalls. Thanks for dropping by!
      </p>

      <h2>Hobbies and Interests</h2>

      <div className="Photography">
        <h3>Photography</h3>
        <p>
          Outside of work, I enjoy learning new things and exploring the art of
          photography. I love capturing moments and sharing them on my {""}
          <a
            href="https://www.instagram.com/red_gerd"
            target="red_gerd"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          . My passion for photography inspired me to create this website—
        </p>
      </div>

      <div className="reading">
        <h3>Reading</h3>
        <p>
          Every now and then, I’ll dust off a book and do some light reading. I
          love finding that rare book that captivates me so much that time slips
          away, where closing it almost feels like waking from a dream. A few of
          my favorite books include:
        </p>
        <ul>
          <li>Collected Stories by Gabriel García Márquez</li>
          <li>The Picture of Dorian Gray by Oscar Wilde</li>
          <li>Notes from Underground by Fyodor Dostoevsky</li>
          <li>No Longer Human by Osamu Dazai</li>
          <li>Letters from a Stoic by Seneca</li>
        </ul>
        <p>
          I don’t have a reading list per se, although there are some books I’d
          like to one day read… Okay, I guess that’s technically a reading list,
          but hopefully you get my point. I don’t like to treat reading as
          something to check off a list because then it feels like work.
        </p>
      </div>

      <div className="music">
        <h3>Music</h3>
        <p>
          I love listening to music—mainly indie, folk, and some hip-hop/rap.
          I’m a big fan of Lana Del Rey, JVKE, Alec Benjamin, and lots of other
          artists that I’d list here if I weren’t pressed for space. Check out
          my Spotify playlists for a sampling of my favorite songs.
        </p>
      </div>

      <div className="gaming">
        <h3>Gaming</h3>
        <p>
          When I’m not coding, you’ll find me praising till I’m hollow. I’m a
          die-hard Soulsborne fan—I love the challenging gameplay, intricate
          lore, jolly co-operation, and community inside jokes that Souls games
          are so well known for. But I also enjoy other genres of games:
          shooters, RPGs, roguelites, card games, platformers, you name it. I
          was practically raised by a generation of browser Flash games—may they
          rest in peace—and an unhealthy amount of (Old School) Runescape, and
          these experiences with video games have shaped my interests and
          personality to this day. Some games have left such a lasting
          impression on me that I’ve written about them.
        </p>

        <p>
          Since I’m sure you’re dying to know, some of my favorite video games
          include:
        </p>
        <ul>
          <li>God of War</li>
          <li>Assassin's Creed IV: Black Flag</li>
          <li>Eldin Ring</li>
          <li>Minecraft</li>
          <li>… and many other great titles.</li>
        </ul>
        <p>
          I could talk about games for hours, so I’m just going to stop here
          before you fall asleep.
        </p>
      </div>

      <section className="closing">
        <h1>So, Yeah… That’s Me!</h1>
        <p>If you made it this far, cool! You’re still awake!</p>
        <p>
          There’s more to my life than what I feel comfortable sharing here, but
          that’s about the gist of my background and interests.
        </p>
        <p>
          At the end of the day, I’m just a Real Human Bean who enjoys doing
          real human things. If that sounds like your cup of tea, get in
          touch—I’d love to hear from you!
        </p>
      </section>
    </section>
  );
};

export default AboutMe;
