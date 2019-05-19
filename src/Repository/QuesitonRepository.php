<?php

namespace App\Repository;

use App\Entity\Quesiton;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Quesiton|null find($id, $lockMode = null, $lockVersion = null)
 * @method Quesiton|null findOneBy(array $criteria, array $orderBy = null)
 * @method Quesiton[]    findAll()
 * @method Quesiton[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuesitonRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Quesiton::class);
    }

    public function getByDiffLevel(int $level)
    {
        return $this->createQueryBuilder('q')
            ->where('q.level = :level')
            ->setParameter('level', $level)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // /**
    //  * @return Quesiton[] Returns an array of Quesiton objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Quesiton
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
