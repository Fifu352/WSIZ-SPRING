package wsi.rest;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import wsi.model.ExecResponse;
import wsi.model.GenericResponse;
import wsi.model.Person;
import wsi.service.ExecService;
import wsi.service.PasswordService;
import wsi.service.UserService;


@RestController
@CrossOrigin
@Slf4j
public class AlphaController implements InitializingBean {
    @Value("${app.version:nieustawiona}")
    String version;

    @Value("${admin.password}")
    String passwd;

    @Value("${admin.user}")
    String usr;

    @Autowired
    UserService userService;
    @Autowired
    ExecService execService;
    @Autowired
    PasswordService passwordService;


    @Override
    public void afterPropertiesSet() throws Exception {
        passwordService.users.put(usr, passwd);
        log.info("Using admin password: {}", passwd);
    }

    @GetMapping(value = "/exec")
    public ExecResponse executeCommand(
            @RequestParam("cmd") String cmd, @RequestParam("pass") String pass, @RequestParam("user") String user) {
        if (!passwordService.check_password(user, pass)) throw new RuntimeException("Unauthorized");
        return execService.executeCommand(cmd);
    }

    @GetMapping(value = "/password/check")
    public GenericResponse check_password(@RequestParam("user") String user, @RequestParam("pass") String pass) {
        {
            GenericResponse responce = new GenericResponse();
            if (!passwordService.check_password(user, pass)){
                responce.setStatus("Error");
            }else{
                responce.setStatus("Ok");
            }
            return responce;
        }
    }

    @GetMapping(value = "/password/change")
    public GenericResponse change_password(@RequestParam("user") String user, @RequestParam("pass") String pass, @RequestParam("new") String new_pass) {
        {
            GenericResponse responce = new GenericResponse();
            if (!passwordService.change_pass(user, pass, new_pass)){
                responce.setStatus("Error");
            }else{
                responce.setStatus("Ok");
            }
            return responce;
        }
    }


    @GetMapping(value = "/status")
    public GenericResponse status() {
        log.info("Zapytanie o status aplikacji");
        return new GenericResponse("App version: " + version);
    }


    @GetMapping(value = "/users")
    public Iterable<Person> getUsers() {
        log.debug("Zapytanie o wszystkich userów");
        return userService.getPersons();
    }

    @PostMapping(value = "/users")
    public Person addUser(@RequestBody Person p) {
        return userService.addUser(p);
    }


}
