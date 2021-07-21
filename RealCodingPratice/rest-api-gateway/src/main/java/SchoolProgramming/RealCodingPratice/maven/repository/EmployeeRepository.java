/**
 * 
 */
package SchoolProgramming.RealCodingPratice.maven.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import SchoolProgramming.RealCodingPratice.maven.modle.Employee;

/**
 * @author dlrbq
 *
 */
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
