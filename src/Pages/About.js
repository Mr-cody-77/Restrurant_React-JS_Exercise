import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-section">
      <div className="aboutAuthor">
        <img src={require('../Images/author.jpeg')} alt="" />
        <h1>Name</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In harum necessitatibus distinctio odio et qui, molestiae vel voluptatem iusto? Doloremque hic aliquam possimus ipsam, non atque at corrupti quos consequatur officiis, ducimus id eius porro ullam maiores earum iure Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dicta soluta. Error aspernatur voluptas minima ad. Libero odit quidem error aut fuga pariatur sit quos ipsum, exercitationem perspiciatis reprehenderit nisi rem natus nulla voluptatibus dignissimos praesentium, quas possimus consequatur in magnam maxime aperiam. Eius, autem cupiditate veniam illo mollitia, ducimus blanditiis officiis saepe nihil nam nemo corporis iusto! Consequuntur magni dolore eligendi ratione dolorem ullam voluptatibus ea nam sit esse aspernatur, optio illo reprehenderit totam facilis, labore in animi placeat velit unde exercitationem. Adipisci debitis omnis expedita non doloribus repellat iure sed, voluptate sit aut tempore optio at! Dolores, accusantium?</p>
      </div>
      <div className="otherInfo">
        <div className="aboutInfo">
          <h2>heads</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, eligendi. Quaerat, enim accusamus! Quas adipisci, incidunt totam reiciendis excepturi numquam autem et a nesciunt facilis, asperiores delectus! Doloremque, nulla corrupti!</p>
        </div>
        <div className="aboutInfo">
          <h2>heads</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, eligendi. Quaerat, enim accusamus! Quas adipisci, incidunt totam reiciendis excepturi numquam autem et a nesciunt facilis, asperiores delectus! Doloremque, nulla corrupti!</p>
        </div>
        <div className="aboutInfo">
          <h2>heads</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, eligendi. Quaerat, enim accusamus! Quas adipisci, incidunt totam reiciendis excepturi numquam autem et a nesciunt facilis, asperiores delectus! Doloremque, nulla corrupti!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
