import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  const colors = ["#789759", "#55A3B0", "#7552A1", "#B14E4E", "#B09256"];

  useEffect(() => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
    const getData = () => {
      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.split(" ").includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data;
    };
    setData(() => getData());
  }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Legend verticalAlign="top" height={25} />
        <Pie
          data={data}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#789759"
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              name={entry.name}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
