<template>
  <div>
    <h1>학생 목록, 학습지 목록 화면</h1>
    <div>{{ studentsData }}</div>
    <div v-if="error" style="color: red">{{ error.message }}</div>
  </div>
  <div>
    <table>
            <thead>
                <tr>
                    <th> 학생 id </th>
                    <th> 학생 이름 </th>
                    <th> 학생 폰번호 </th>
                    <th> 학생 학년 </th>
                    <th> 학생 학교 </th>
                    <th> 학생 상세설명 </th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(student, i) in studentsData" @click="selectStudent(student.studentId)">
                    <td>{{ student.studentId }}</td>
                    <td>{{ student.studentName }}</td>
                    <td>{{ student.studentPhone }}</td>
                    <td>{{ student.studentBirthdate }}</td>
                    <td>{{ student.studentSchool }}</td>
                    <td>{{ student.studentComments }}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
// 받은 데이터 테이블로 보여주기
// 테이블의 행 클릭 시 id 변수에 담기
import { ref, onMounted } from "vue";
import { useApi } from "../composables/api.js";

export default {
  setup() {
    const api = useApi();
    const studentsData = ref([]);
    const error = ref(null);
    const selectedStudentId = ref(null);

    // 학생 데이터 불러오기
    async function students() {
      const teacherId = 3;
      try {
        const response = await api.get(`/students?teacherId=${teacherId}`);
        studentsData.value = response;
        error.value = null;
      } catch (err) {
        console.error("데이터를 불러오는 중 에러 발생:", err);
        error.value = err;
      }
    }
    // 페이지 로드 시 데이터 불러오기
    onMounted(() => {
      students();
    });

    function selectStudent(studentId) {
        selectedStudentId.value = studentId;
        console.log(selectedStudentId.value);
    }

    return {
      studentsData,
      error,
      selectedStudentId,
      selectStudent
    };
  },
};

</script>
