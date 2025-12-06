import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
return ( <Layout
   title="Physical AI & Humanoid Robotics Textbook"
   description="Complete AI-Native textbook for mastering robotics, humanoids, ROS2, VLA systems, and digital twins."
 >
{/* HERO SECTION */}
<header
style={{
padding: "80px 20px",
textAlign: "center",
background: "linear-gradient(135deg, #003366, #0066cc)",
color: "white",
}}
>
<h1 style={{ fontSize: "54px", fontWeight: "bold", marginBottom: "20px" }}>
Physical AI & Humanoid Robotics Textbook </h1>
<p style={{ fontSize: "22px", maxWidth: "850px", margin: "0 auto", lineHeight: "1.6" }}>
A complete and practical learning system where you master the future:
humanoid robotics, ROS 2, large action models, simulation, VLA systems, hardware,
and advanced AI for next-generation intelligent machines. </p>

```
    <div style={{ marginTop: "40px" }}>
      <Link
        className="button button--primary button--lg"
        style={{
          background: "#0073e6",
          borderRadius: "10px",
          padding: "12px 22px",
        }}
        to="/docs/introduction/intro"
      >
        Start Reading →
      </Link>
    </div>
  </header>

  {/* ABOUT SECTION */}
  <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "0 auto" }}>
    <h2 style={{ fontSize: "36px", marginBottom: "20px", textAlign: "center" }}>
      What This Textbook Covers
    </h2>
    <p style={{ fontSize: "20px", lineHeight: "1.7", color: "#1a1a1a", textAlign: "center" }}>
      This is a complete AI-native engineering curriculum designed for physical AI, humanoid robots,
      embodied intelligence, ROS 2 programming, digital twin simulations, and Vision-Language-Action
      (VLA) systems. Each module builds your robotics superpowers step by step.
    </p>
  </section>

  {/* MODULE CARDS */}
  <section style={{ padding: "60px 20px", background: "#e6f0fa" }}>
    <h2 style={{ fontSize: "32px", marginBottom: "40px", textAlign: "center" }}>
      Explore All Modules
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "25px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* MODULES */}
      <div style={cardStyle}>
        <h3 style={cardTitle}>Module 1: ROS 2 Foundations</h3>
        <p style={cardText}>
          Learn ROS 2 — the nervous system of modern robots. Build nodes, topics,
          services, actions, publishers, subscribers, QoS, and real robot workflows.
        </p>
        <Link style={cardBtn} to="/docs/ros2-foundations/module-1-ros2">
          Open Module →
        </Link>
      </div>

      <div style={cardStyle}>
        <h3 style={cardTitle}>Module 2: Simulation & Digital Twins</h3>
        <p style={cardText}>
          Master simulation systems: Gazebo, Unity Robotics, Isaac Sim, and digital
          twin workflows for training and testing robots safely.
        </p>
        <Link style={cardBtn} to="/docs/simulation/module-2-simulation">
          Open Module →
        </Link>
      </div>

      <div style={cardStyle}>
        <h3 style={cardTitle}>Module 3: Hardware Foundations</h3>
        <p style={cardText}>
          Motors, actuators, torque control, IMUs, sensors, microcontrollers,
          embedded systems — everything real humanoids need.
        </p>
        <Link style={cardBtn} to="/docs/hardware-basics/module-3-hardware">
          Open Module →
        </Link>
      </div>

      <div style={cardStyle}>
        <h3 style={cardTitle}>Module 4: VLA — Vision, Language, Action</h3>
        <p style={cardText}>
          Learn the most advanced robotics architecture: perception models,
          LLM-driven command systems, action planners, and embodied AI agents.
        </p>
        <Link style={cardBtn} to="/docs/vla-systems/module-4-vla-foundations">
          Open Module →
        </Link>
      </div>

      <div style={cardStyle}>
        <h3 style={cardTitle}>Module 5: Advanced AI & Motion Control</h3>
        <p style={cardText}>
          Reinforcement learning, motion planning, MPC, trajectory optimization,
          and how robots think and move intelligently.
        </p>
        <Link style={cardBtn} to="/docs/advanced-ai-control/module-5-advanced-ai">
          Open Module →
        </Link>
      </div>

      <div style={cardStyle}>
        <h3 style={cardTitle}>Module 6: Designing Humanoid Robots</h3>
        <p style={cardText}>
          Learn end-to-end humanoid creation: mechanical design, kinematics, actuators,
          morphologies, energy systems, and AI-driven movement.
        </p>
        <Link style={cardBtn} to="/docs/humanoid-design/module-6-humanoid-design">
          Open Module →
        </Link>
      </div>

      <div style={cardStyle}>
        <h3 style={cardTitle}>Appendix</h3>
        <p style={cardText}>
          Glossary, research papers, references, external resources, and further reading
          for mastering robotics and AI.
        </p>
        <Link style={cardBtn} to="/docs/appendix/glossary">
          Open Appendix →
        </Link>
      </div>
    </div>
  </section>

  {/* FEATURES SECTION */}
  <section style={{ padding: "80px 20px", background: "white" }}>
    <h2 style={{ textAlign: "center", fontSize: "34px", marginBottom: "50px" }}>
      Why This Textbook is AI-Native & Future-Focused
    </h2>

    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "35px",
      }}
    >
      <div style={featureBox}>
        <h3>AI-Driven Design</h3>
        <p>
          Built fully around modern robotics workflows, from LLM agents to VLA systems
          and intelligent controllers.
        </p>
      </div>

      <div style={featureBox}>
        <h3>Hands-On Learning</h3>
        <p>
          Every module includes practical steps, code examples, simulations, and
          real robot applications.
        </p>
      </div>

      <div style={featureBox}>
        <h3>Industry-Inspired Curriculum</h3>
        <p>
          The content reflects what Tesla Bots, Figure AI, Apptronik, and Sanctuary AI
          use in real humanoid robotics pipelines.
        </p>
      </div>
    </div>
  </section>

  {/* CTA SECTION */}
  <section
    style={{
      padding: "90px 20px",
      background: "#001f4d",
      color: "white",
      textAlign: "center",
    }}
  >
    <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
      Begin Your Robotics Journey
    </h2>
    <p style={{ fontSize: "20px", marginBottom: "40px", color: "#cce0ff" }}>
      The future belongs to physical AI, embodied intelligence, and humanoid robotics.
      Start mastering it today.
    </p>

    <Link
      className="button button--primary button--lg"
      style={{
        background: "#0073e6",
        borderRadius: "10px",
        padding: "12px 24px",
      }}
      to="/docs/introduction/intro"
    >
      Start Reading →
    </Link>
  </section>
</Layout>


);
}

/* ======== STYLES ======== */
const cardStyle = {
background: "white",
padding: "25px",
borderRadius: "12px",
border: "1px solid #cce0ff",
boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
};

const cardTitle = {
fontSize: "22px",
fontWeight: "bold",
color: "#003366",
marginBottom: "10px",
};

const cardText = {
fontSize: "16px",
color: "#333",
marginBottom: "20px",
lineHeight: "1.5",
};

const cardBtn = {
textDecoration: "none",
background: "#0073e6",
padding: "10px 16px",
color: "white",
borderRadius: "8px",
fontSize: "15px",
fontWeight: "bold",
};

const featureBox = {
padding: "25px",
background: "#e6f0fa",
borderRadius: "10px",
border: "1px solid #cce0ff",
textAlign: "left",
};
