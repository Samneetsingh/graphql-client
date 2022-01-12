import React from "react";
import styles from "./Courses.module.css";
import { useQuery, gql } from "@apollo/client";

interface Course {
  id: number;
  title: string;
  instructor: string;
}

interface CourseData {
  getCourse: Course[];
}

interface CourseVars {
  title: string;
}

const Courses = () => {
  const GET_COURSES_QUERY = gql`
    query {
      getCourse {
        id
        title
        instructor
      }
    }
  `;

  const { loading, error, data } = useQuery<CourseData, CourseVars>(
    GET_COURSES_QUERY
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className={styles.Course}>
      <h3>Available Courses</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th>id</th>
              <th>Title</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.getCourse.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.title}</td>
                  <td>{course.instructor}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Courses;
