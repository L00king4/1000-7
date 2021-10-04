import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../css/Trainees/TraineesBlock.css";
import { fetchTrainees } from "../Redux/Services/TraineesService";
import { TraineesBlockActions } from "./Block/TraineesBlockActions";
import { TraineesBlockContent } from "./Block/TraineesBlockContent";
import { TraineesBlockHeader } from "./Block/TraineesBlockHeader";

export const TraineesBlock = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTrainees(dispatch);
  }, []);
  return (
    <div className="TraineesBlockMain">
      <TraineesBlockHeader />
      <TraineesBlockContent />
      <TraineesBlockActions />
    </div>
  );
};
