import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { BenefitType, SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import Htext from '../../shared/Htext';
import Benefit from './Benefit';
import ActionButton from '../../shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the Art Facilities',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad placeat unde eveniet eum adipisci voluptas et.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: '100s of Diverse Classes',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad placeat unde eveniet eum adipisci voluptas et eum adipisci voluptas et.',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad placeat unde eveniet eum adipisci voluptas et.',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum
            labore earum, ducimus vitae, rerum nobis dolorem corrupti incidunt
            illum tempora cumque expedita placeat at nisi cupiditate.
          </p>
        </motion.div>

        {/* benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* graphics and description */}
        <div className=" mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphic */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src={BenefitsPageGraphic}
              alt="benefits-page-graphic"
              className="mx-auto"
            />
          </motion.div>

          {/* desc */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>

            {/* desc */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quo,
                est tempora eos ipsum sunt nesciunt quisquam facere nulla cum at
                voluptatibus, asperiores expedita, enim error ut in totam.
                Beatae, quidem ea sapiente placeat corrupti officiis corporis
                vel quam nesciunt hic quia quod distinctio et sunt, temporibus
                similique laboriosam maiores?
              </p>

              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                recusandae fugit accusamus reiciendis sequi illo consequuntur
                quasi, harum labore, neque, debitis reprehenderit ex numquam
                itaque. Repellat error at debitis veniam eaque cupiditate unde
                quis impedit, iusto, perspiciatis id, nulla magni.
              </p>
            </motion.div>

            {/* button */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative mt-16"
            >
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
