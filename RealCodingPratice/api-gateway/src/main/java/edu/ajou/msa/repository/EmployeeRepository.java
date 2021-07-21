/**
 * 
 */
package edu.ajou.msa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.ajou.msa.model.Employee;

/**
 * @author dlrbq
 *
 */

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
