package wsi.service;

import com.github.javafaker.Faker;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import wsi.model.Person;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

@Service
@Slf4j
public class UserService {
    Faker f = new Faker(new Locale("pl")); //pl, en-UK, ru, ...

    Map<Integer, Person> personStorage;
    int nextId = 0;

    //konstruktor
    public UserService() {
        log.info("Tworzę serwis userów");
        generatePersons();
    }

    private void generatePersons() {
        personStorage = new HashMap<>();
        for (int i = 0; i < 5; i++) {
            int id = nextId++;
            Person p = new Person(i, f.name().firstName(), f.name().lastName(), f.address().city());
            personStorage.put(id, p);
        }
    }

    public Iterable<Person> getPersons() {
        return personStorage.values();
    }

    public Person addUser(Person p) {
        int id = nextId++;
        p.setPid(id);
        personStorage.put(id, p);
        return p;
    }


}
