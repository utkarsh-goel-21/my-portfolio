import { motion } from 'framer-motion';

const TestEmail = () => {
  return (
    <div style={{ padding: '50px' }}>
      <h2>Email Link Tests:</h2>
      
      <p>1. Plain HTML anchor:</p>
      <a href="mailto:test@example.com">Plain Email Link</a>
      
      <p>2. Motion.a with mailto:</p>
      <motion.a 
        href="mailto:test@example.com"
        whileHover={{ scale: 1.1 }}
      >
        Motion Email Link
      </motion.a>
      
      <p>3. Button with onClick:</p>
      <button onClick={() => window.location.href = 'mailto:test@example.com'}>
        Button Email
      </button>
      
      <p>4. Your actual email:</p>
      <a href="mailto:utkarshgoel.dev@gmail.com">utkarshgoel.dev@gmail.com</a>
    </div>
  );
};

export default TestEmail;