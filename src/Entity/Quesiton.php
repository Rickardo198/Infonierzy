<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuesitonRepository")
 */
class Quesiton
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $answerA;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $answerB;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $answerC;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $answerD;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $correct;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $level;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getAnswerA(): ?string
    {
        return $this->answerA;
    }

    public function setAnswerA(string $answerA): self
    {
        $this->answerA = $answerA;

        return $this;
    }

    public function getAnswerB(): ?string
    {
        return $this->answerB;
    }

    public function setAnswerB(string $answerB): self
    {
        $this->answerB = $answerB;

        return $this;
    }

    public function getAnswerC(): ?string
    {
        return $this->answerC;
    }

    public function setAnswerC(string $answerC): self
    {
        $this->answerC = $answerC;

        return $this;
    }

    public function getAnswerD(): ?string
    {
        return $this->answerD;
    }

    public function setAnswerD(string $answerD): self
    {
        $this->answerD = $answerD;

        return $this;
    }

    public function getCorrect(): ?string
    {
        return $this->correct;
    }

    public function setCorrect(string $correct): self
    {
        $this->correct = $correct;

        return $this;
    }

    public function getLevel(): ?string
    {
        return $this->level;
    }

    public function setLevel(string $level): self
    {
        $this->level = $level;

        return $this;
    }
}
