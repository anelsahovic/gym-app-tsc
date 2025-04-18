import { ClassType, SelectedPage } from '../../shared/types';
import image1 from '/assets/image1.png';
import image2 from '/assets/image2.png';
import image3 from '/assets/image3.png';
import image4 from '/assets/image4.png';
import image5 from '/assets/image5.png';
import image6 from '/assets/image6.png';
import { motion } from 'framer-motion';
import Htext from '../../shared/Htext';
import Class from './Class';

const classes: ClassType[] = [
  {
    name: 'Weight Training Classes ',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis esse sapiente delectus dolores et nam illum quidem voluptate, quod assumenda.',
    image: image1,
  },
  {
    name: ' Training Classes ',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis esse sapiente delectus dolores et nam illum quidem voluptate, quod assumenda.',
    image: image2,
  },
  {
    name: 'Fitness Training Classes ',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis esse sapiente delectus dolores et nam illum quidem voluptate, quod assumenda.',
    image: image3,
  },
  {
    name: 'Adventure Training Classes ',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis esse sapiente delectus dolores et nam illum quidem voluptate, quod assumenda.',
    image: image4,
  },
  {
    name: 'Parkour Training Classes ',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis esse sapiente delectus dolores et nam illum quidem voluptate, quod assumenda.',
    image: image5,
  },
  {
    name: 'Yoga Training Classes ',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis esse sapiente delectus dolores et nam illum quidem voluptate, quod assumenda.',
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              nobis quam quasi ipsa officiis sunt rerum, quod molestiae sit
              numquam blanditiis, obcaecati praesentium nemo tempora amet
              facere.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index} `}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
