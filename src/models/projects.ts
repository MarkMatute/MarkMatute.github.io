export class Project {
  title?: string;
  subTitle?: string;
  image?: string;
  company?: string;
  description?: string;
  technologies?: string[];
  tags?: string[];
  liveLink?: string;
  slug?: string;
}

export const PROJECTS: Project[] = [
   {
    title: 'Open Source Projects',
    subTitle: 'REST API templates, personal projects, Open source tools',
    image: '/images/9.png',
    company: 'SimpleIdeaLabs',
    description: `
      <div>
        <a href="https://github.com/SimpleIdeaLabs/nestjs-starter-template" target="_blank">
          <h6>nestjs-starter-template</h6>
        </a>
        <p>
          This is a robust API boilerplate built with NestJS, designed to provide essential out-of-the-box features for your project. With this boilerplate, you'll have access to key features like a Dockerized app, TDD E2E testing, comprehensive logging, and user login functionality. Whether you're a seasoned developer or just starting out, this boilerplate will save you time and effort by providing a solid foundation for your project.
        </p>
        <hr />
        <a href="https://github.com/SimpleIdeaLabs/simple-ts" target="_blank">
          <h6>simple-ts</h6>
        </a>
        <p>
          This is a TypeScript boilerplate that comes with all the essential tools you need for software development. It includes automatic code formatting with eslint and prettier, mandatory code standard implementation with husky, testing with Jest, and a Docker development setup.
        </p>
        <hr/>
         <a href="https://github.com/MarkMatute/node-modules-browser" target="_blank">
          <h6>node-modules-browser</h6>
        </a>
        <p>
          Our tool generates a simple HTML file that shows your Node dependencies. It reads your project's package.json file, making it easy to manage your dependencies. With our tool, you can view your dependencies in a clear and straightforward format, eliminating the need to navigate through a long list of dependencies in your terminal.
        </p>
      </div>
    `,
    technologies: ['nodejs', 'react', 'redux', 'typescript', 'javascript', 'nestjs', 'docker', 'aws'],
    tags: ['microservice', 'nodejs', 'typescript', 'opensource'],
    liveLink: '',
    slug: 'open-source'
  },
  {
    title: 'File Service',
    subTitle: 'REST API to handle file upload and download.',
    image: '/images/1.png',
    company: 'Healthbeats',
    description: `
      The implementation of a robust microservice that can handle all file uploads and downloads in a centralized location is an important and strategic decision. This type of microservice not only helps to streamline file management across different systems and applications, but also provides an extra layer of security by ensuring that all access to files is authenticated, preventing unauthorized access or file leakage.
      <br />
      <br />
      In order to further enhance the security of this microservice, strict measures must be put in place during the file upload process. By implementing a file validation system, the microservice can ensure that only expected file types and file sizes are uploaded. This will help to mitigate the risk of uploading malicious files or files that may cause system failures due to their size.
      <br />
      <br />
      To further protect against malware or viruses, an antivirus scanning system can also be implemented to scan all files during the upload process. This allows the microservice to identify and remove any potentially harmful files before they are uploaded to Amazon S3, mitigating the risk of malware or virus infections.
      <br />
      <br />
      Overall, the implementation of a centralized file management microservice, combined with strict file validation and antivirus scanning, provides a robust and secure solution for managing file uploads and downloads across multiple systems and applications.
    `,
    technologies: ['nodejs', 'typescript', 'javascript', 'nestjs', 'clamav', 'docker', 'aws'],
    tags: ['microservice', 'nodejs', 'typescript', 'rest-api'],
    liveLink: '',
    slug: 'healthbeats-file-service'
  },
  {
    title: 'Reporting Service',
    subTitle: 'REST API to handle complex data generation.',
    image: '/images/2.png',
    company: 'Healthbeats',
    description: `
      Our microservice REST API is the perfect solution for any project that requires computing patient data for generating PDF and CSV reports. Our service is equipped with robust features that make it efficient, reliable, and easy to use. One of its most significant benefits is that it is connected to Snowflake, providing you with a secure and reliable way to store and manage your data. Additionally, our API includes extensive logging that enables you to track and troubleshoot any issues that may arise.
      <br/><br/>
      Another great feature of our microservice is that it comes with TDD e2e testing, ensuring that your code is always up to par. With this feature, you can easily test your application and ensure that it meets your requirements before deployment. And, thanks to our Dockerization, you can easily deploy and scale our service to meet the demands of your application.
      <br/><br/>
      In summary, our microservice REST API offers a robust set of features that make it an excellent choice for any project that requires patient data computation for generating PDF and CSV reports. Its integration with Snowflake, extensive logging, TDD e2e testing, and Dockerization are just a few of the many benefits that make it the ideal choice for any developer.
    `,
    technologies: ['nodejs', 'typescript', 'javascript', 'nestjs', 'docker', 'aws'],
    tags: ['microservice', 'nodejs', 'typescript', 'rest-api'],
    liveLink: '',
    slug: 'healthbeats-reporting-service'
  },
  {
    title: 'Healthbeats Service',
    subTitle: 'REST API to power Healthbeats platform.',
    image: '/images/3.png',
    company: 'Healthbeats',
    description: `
      Our REST API service is the backbone of our company, providing the core functionality that powers our web and mobile applications. With a range of features such as alert generation and notifications, this service serves both our internal needs and the needs of our customers. We have designed our service to be versatile and scalable, allowing us to meet the ever-changing demands of our business.
      <br/><br/>
      One of the most significant benefits of our API is the extensive access control list (ACL) management. This feature is crucial, given that we handle patient data, and even the slightest mistake can have severe consequences. Our ACL management system is designed to ensure that only authorized personnel can access the data, and every action taken is carefully logged and monitored. Additionally, we have implemented a complete API registration and configuration process to streamline the management of our service.
      <br/><br/>
      Managing a complex API with over 300 endpoints can be challenging, but we have put in place a system to make it as streamlined as possible. Our team has worked tirelessly to ensure that every aspect of our service is thoroughly tested and optimized, ensuring maximum performance and reliability. With this level of attention to detail, we can confidently say that our REST API is one of the most robust and reliable services available in the market today.
      <br/><br/>
      In summary, our REST API service is the lifeblood of our business, powering our web and mobile applications with its extensive range of features. We have implemented a range of systems and processes to ensure that our API is secure, reliable, and efficient. With extensive ACL management, complete API registration and configuration, and thorough testing and optimization, we have created a service that we are proud to offer to our customers.
    `,
    technologies: ['nodejs', 'typescript', 'javascript', 'express', 'docker', 'aws'],
    tags: ['microservice', 'nodejs', 'typescript', 'rest-api'],
    liveLink: '',
    slug: 'healthbeats-platform-service'
  },
  {
    title: 'Healthbeats Web App',
    subTitle: 'Web App to empower Health Providers.',
    image: '/images/4.png',
    company: 'Healthbeats',
    description: `
      Our web dashboard, built using React technologies, provides multi-tenant users with comprehensive data tables, profiles, and report displays. It's user-friendly, highly customizable, and designed to meet the needs of businesses of all sizes. Whether you need to monitor key metrics, track KPIs, or generate custom reports, our dashboard is designed to help you make informed decisions.
      <hr/>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/projects/healthbeats/1.png" class="d-block w-100" alt="First slide">
          </div>
          <div class="carousel-item">
            <img src="/images/projects/healthbeats/2.png" class="d-block w-100" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img src="/images/projects/healthbeats/3.png" class="d-block w-100" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img src="/images/projects/healthbeats/4.png" class="d-block w-100" alt="Fourth slide">
          </div>
          <div class="carousel-item">
            <img src="/images/projects/healthbeats/5.png" class="d-block w-100" alt="Fifth slide">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `,
    technologies: ['react', 'redux', 'materialui', 'docker'],
    tags: ['web-app', 'react', 'material-ui'],
    liveLink: '',
    slug: 'healthbeats-web-app'
  },
  {
    title: 'Healthbeats Mobile App',
    subTitle: 'Mobile App to extend Healthbeats to patients.',
    image: '/images/5.png',
    company: 'Healthbeats',
    description: `
      The Healthbeat mobile app, built with hybrid technologies such as React Native,
      empowers customers with advanced health tech capabilities that connect with IoT devices to take vital signs. This exciting app brings the power of Healthbeat's platform into the hands of users, providing them with a seamless and intuitive experience.
      <hr/>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/projects/healthbeats/6.png" class="d-block w-100" alt="First slide">
          </div>
          <div class="carousel-item">
            <img src="/images/projects/healthbeats/7.png" class="d-block w-100" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img src="/images/projects/healthbeats/8.png" class="d-block w-100" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img src="/images/projects/healthbeats/9.png" class="d-block w-100" alt="Fourth slide">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `,
    technologies: ['react', 'redux', 'swift', 'android'],
    tags: ['react', 'react-native', 'ios','android', 'mobile-app'],
    liveLink: '',
    slug: 'healthbeats-mobile-app'
  },
  {
    title: 'Dishqou Mobile App',
    subTitle: 'Meal planning platform.',
    image: '/images/6.png',
    company: 'Dishqou',
    description: `
      Elevate your nutrition planning game with the ultimate solution designed specifically for health professionals. <br/>
      Streamline your workflow and provide your clients with personalized nutrition plans that cater to their unique needs and goals. <br/>
      With our cutting-edge platform, you can empower your clients to take control of their health and wellness like never before.
    `,
    technologies: ['react', 'redux', 'swift', 'android'],
    tags: ['react', 'react-native', 'ios','android', 'mobile-app'],
    liveLink: '',
    slug: 'dishqou-mobile-app'
  },
  {
    title: 'Driftr Service',
    subTitle: 'REST API to power Driftr Mobile App.',
    image: '/images/8.png',
    company: 'Driftr',
    description: `
      The REST API service powering the Driftr Mobile App utilizes AWS RDS to store data and AWS S3 for file storage, designed with simplicity and robustness in mind.
      <br/><br/>
      What sets this service apart is its utilization of AWS EKS for deployment, along with social media integrations, messaging, and a host of other features.
    `,
    technologies: ['nodejs', 'typescript', 'javascript', 'nestjs', 'docker', 'aws'],
    tags: ['microservice', 'nodejs', 'typescript', 'rest-api'],
    liveLink: '',
    slug: 'driftr-service'
  },
  {
    title: 'Driftr Mobile App',
    subTitle: 'Tindr inspired car matching app.',
    image: '/images/7.png',
    company: 'Driftr',
    description: `
      Built with hybrid technologies like React Native and inspired by Tinder, this mobile app is designed to help users find cars around the world with a seamless swiping experience. With its intuitive user interface, this app is the perfect tool for browsing cars and finding the perfect match.
      <hr/>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 12"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12" aria-label="Slide 13"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/projects/driftr/1.png" class="d-block w-100" alt="First slide">
          </div>
          <div class="carousel-item">
            <img src="/images/projects/driftr/2.png" class="d-block w-100" alt="First slide">
          </div>
           <div class="carousel-item">
            <img src="/images/projects/driftr/3.png" class="d-block w-100" alt="First slide">
          </div>
           <div class="carousel-item">
            <img src="/images/projects/driftr/4.png" class="d-block w-100" alt="First slide">
          </div>
           <div class="carousel-item">
            <img src="/images/projects/driftr/5.png" class="d-block w-100" alt="First slide">
          </div>
           <div class="carousel-item">
            <img src="/images/projects/driftr/6.png" class="d-block w-100" alt="First slide">
          </div>
           <div class="carousel-item">
            <img src="/images/projects/driftr/7.png" class="d-block w-100" alt="First slide">
          </div>
           <div class="carousel-item">
            <img src="/images/projects/driftr/8.png" class="d-block w-100" alt="First slide">
          </div>
           <div class="carousel-item">
            <img src="/images/projects/driftr/9.png" class="d-block w-100" alt="First slide">
          </div>
           <div class="carousel-item">
            <img src="/images/projects/driftr/10.png" class="d-block w-100" alt="First slide">
          </div>
           <div class="carousel-item">
            <img src="/images/projects/driftr/11.png" class="d-block w-100" alt="First slide">
          </div>
           <div class="carousel-item">
            <img src="/images/projects/driftr/12.png" class="d-block w-100" alt="First slide">
          </div>
           <div class="carousel-item">
            <img src="/images/projects/driftr/13.png" class="d-block w-100" alt="First slide">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `,
    technologies: ['react', 'redux', 'swift', 'android'],
    tags: ['react', 'react-native', 'ios','android', 'mobile-app'],
    liveLink: '',
    slug: 'driftr-mobile-app'
  },
];
