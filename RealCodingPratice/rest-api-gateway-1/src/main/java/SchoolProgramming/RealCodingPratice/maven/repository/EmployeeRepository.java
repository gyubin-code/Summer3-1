/**
 * 
 */
package SchoolProgramming.RealCodingPratice.maven.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import SchoolProgramming.RealCodingPratice.maven.modle.Employee;

/**
 * @author dlrbq
 *
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}