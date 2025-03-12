"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const Feedback = ({ params }) => {
  const router = useRouter();
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };

  const overallRating = useMemo(() => {
    if (feedbackList && feedbackList.length > 0) {
      const totalRating = feedbackList.reduce(
        (sum, item) => sum + Number(item.rating),
        0
      );
      return (totalRating / feedbackList.length).toFixed(1);
    }
    return 0;
  }, [feedbackList]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10"
    >
      {feedbackList?.length == 0 ? (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-xl text-gray-500 my-5"
        >
          No Interview feedback Record Found
        </motion.h2>
      ) : (
        <>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-green-500"
          >
            Congratulations
          </motion.h2>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-bold text-2xl"
          >
            Here is your interview feedback
          </motion.h2>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-primary text-lg my-3"
          >
            Your overall interview rating{" "}
            <strong
              className={`${overallRating >= 5 ? "text-green-500" : "text-red-600"}`}
            >
              {overallRating}
              <span className="text-black">/10</span>
            </strong>
          </motion.h2>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-sm text-gray-500"
          >
            Find below interview question with correct answer, Your answer and
            feedback for improvement
          </motion.h2>
          <AnimatePresence>
            {feedbackList &&
              feedbackList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  <Collapsible className="mt-7">
                    <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 w-full hover:bg-secondary/80 transition-colors">
                      {item.question} <ChevronDown className="h-5 w-5" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-2"
                      >
                        <motion.h2
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-red-500 p-2 border rounded-lg hover:shadow-md transition-shadow"
                        >
                          <strong>Rating: </strong>
                          {item.rating}
                        </motion.h2>
                        <motion.h2
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="p-2 border rounded-lg bg-red-50 text-sm text-red-900 hover:shadow-md transition-shadow"
                        >
                          <strong>Your Answer: </strong>
                          {item.userAns}
                        </motion.h2>
                        <motion.h2
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="p-2 border rounded-lg bg-green-50 text-sm text-green-900 hover:shadow-md transition-shadow"
                        >
                          <strong>Correct Answer: </strong>
                          {item.correctAns}
                        </motion.h2>
                        <motion.h2
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="p-2 border rounded-lg bg-blue-50 text-sm text-primary-900 hover:shadow-md transition-shadow"
                        >
                          <strong>Feedback: </strong>
                          {item.feedback}
                        </motion.h2>
                      </motion.div>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
              ))}
          </AnimatePresence>
        </>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button
          onClick={() => router.replace("/dashboard")}
          className="mt-6 hover:scale-105 transition-transform"
        >
          Go Home
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Feedback;
