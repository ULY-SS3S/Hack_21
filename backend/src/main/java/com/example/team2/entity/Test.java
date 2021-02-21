package com.example.team2.entity;

import javax.persistence.*;

@Entity
@Table(name="Test")
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String msg;

    public Test(String msg) {
        this.msg = msg;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "Test{" +
                "id=" + id +
                ", msg='" + msg + '\'' +
                '}';
    }
}
