



### What I learned

During this project, I learned how to implement a time tracking dashboard that dynamically updates stats based on user interaction (Daily, Weekly, Monthly).

- **Handling state with React**: I utilized React's useState and useEffect hooks to manage and update the time tracking data, ensuring it switches between daily, weekly, and monthly views based on user selection.
  
```js:const [timeFrame, setTimeFrame] = useState('daily');
const handleTimeFrameChange = (frame) => {
  setTimeFrame(frame);
};

##css:
.time-tracking-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}


##JS:
const Card = styled.div`
  background: ${(props) => props.bgColor || 'white'};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;









