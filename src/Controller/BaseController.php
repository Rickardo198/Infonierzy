<?php

namespace App\Controller;

use App\Repository\QuestionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class BaseController extends AbstractController
{
    /**
     * @Route("/", name="base")
     */
    public function index()
    {
        return $this->render('base/index.html.twig');
    }

    /**
     * @param QuestionRepository $repository
     * @param Request $request
     * @Route("/api/getQuestionByLevel")
     */
    public function getQuestionByLevel(QuestionRepository $repository, Request $request)
    {
        $level = (int)$request->request->get('level');
        if($level===null) return $this->json(false);
        $questions = $repository->getByDiffLevel($level);
        $len = sizeof($questions);
        $rand = random_int(0,(!$len)?:0);
        return $this->json($questions[$rand]);
    }
}
